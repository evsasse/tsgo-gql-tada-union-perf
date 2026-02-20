import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4854 } from "./fragment4854";
import type { FragmentToken4855 } from "./fragment4855";

export const FRAGMENT_4856 = gql(`
  fragment Fragment4856 on Member95 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_95
    memberCount_95
    memberMetric_95
  }
`);

type FragmentResult4856 = ResultOf<typeof FRAGMENT_4856>;
type FragmentSelf4856 = NonNullable<FragmentResult4856>;

export type FragmentToken4856 =
  | FragmentSelf4856["__typename"]
  | FragmentSelf4856["typenameHint"] | FragmentToken4854 | FragmentToken4855;
