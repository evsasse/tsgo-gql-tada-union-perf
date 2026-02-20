import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4832 } from "./fragment4832";
import type { FragmentToken4833 } from "./fragment4833";

export const FRAGMENT_4834 = gql(`
  fragment Fragment4834 on Member73 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_73
    memberCount_73
    memberMetric_73
  }
`);

type FragmentResult4834 = ResultOf<typeof FRAGMENT_4834>;
type FragmentSelf4834 = NonNullable<FragmentResult4834>;

export type FragmentToken4834 =
  | FragmentSelf4834["__typename"]
  | FragmentSelf4834["typenameHint"] | FragmentToken4832 | FragmentToken4833;
