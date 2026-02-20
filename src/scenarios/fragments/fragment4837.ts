import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4835 } from "./fragment4835";
import type { FragmentToken4836 } from "./fragment4836";

export const FRAGMENT_4837 = gql(`
  fragment Fragment4837 on Member76 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_76
    memberCount_76
    memberMetric_76
  }
`);

type FragmentResult4837 = ResultOf<typeof FRAGMENT_4837>;
type FragmentSelf4837 = NonNullable<FragmentResult4837>;

export type FragmentToken4837 =
  | FragmentSelf4837["__typename"]
  | FragmentSelf4837["typenameHint"] | FragmentToken4835 | FragmentToken4836;
