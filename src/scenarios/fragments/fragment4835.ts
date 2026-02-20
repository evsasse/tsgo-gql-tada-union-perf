import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4833 } from "./fragment4833";
import type { FragmentToken4834 } from "./fragment4834";

export const FRAGMENT_4835 = gql(`
  fragment Fragment4835 on Member74 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_74
    memberCount_74
    memberMetric_74
  }
`);

type FragmentResult4835 = ResultOf<typeof FRAGMENT_4835>;
type FragmentSelf4835 = NonNullable<FragmentResult4835>;

export type FragmentToken4835 =
  | FragmentSelf4835["__typename"]
  | FragmentSelf4835["typenameHint"] | FragmentToken4833 | FragmentToken4834;
