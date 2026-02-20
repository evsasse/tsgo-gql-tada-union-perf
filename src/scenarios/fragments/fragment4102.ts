import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4100 } from "./fragment4100";
import type { FragmentToken4101 } from "./fragment4101";

export const FRAGMENT_4102 = gql(`
  fragment Fragment4102 on Member181 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_181
    memberCount_181
    memberMetric_181
  }
`);

type FragmentResult4102 = ResultOf<typeof FRAGMENT_4102>;
type FragmentSelf4102 = NonNullable<FragmentResult4102>;

export type FragmentToken4102 =
  | FragmentSelf4102["__typename"]
  | FragmentSelf4102["typenameHint"] | FragmentToken4100 | FragmentToken4101;
