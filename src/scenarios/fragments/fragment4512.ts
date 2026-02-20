import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4510 } from "./fragment4510";
import type { FragmentToken4511 } from "./fragment4511";

export const FRAGMENT_4512 = gql(`
  fragment Fragment4512 on Member31 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_31
    memberCount_31
    memberMetric_31
  }
`);

type FragmentResult4512 = ResultOf<typeof FRAGMENT_4512>;
type FragmentSelf4512 = NonNullable<FragmentResult4512>;

export type FragmentToken4512 =
  | FragmentSelf4512["__typename"]
  | FragmentSelf4512["typenameHint"] | FragmentToken4510 | FragmentToken4511;
