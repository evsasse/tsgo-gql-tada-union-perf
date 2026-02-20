import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4516 } from "./fragment4516";
import type { FragmentToken4517 } from "./fragment4517";

export const FRAGMENT_4518 = gql(`
  fragment Fragment4518 on Member37 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_37
    memberCount_37
    memberMetric_37
  }
`);

type FragmentResult4518 = ResultOf<typeof FRAGMENT_4518>;
type FragmentSelf4518 = NonNullable<FragmentResult4518>;

export type FragmentToken4518 =
  | FragmentSelf4518["__typename"]
  | FragmentSelf4518["typenameHint"] | FragmentToken4516 | FragmentToken4517;
