import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4683 } from "./fragment4683";
import type { FragmentToken4684 } from "./fragment4684";

export const FRAGMENT_4685 = gql(`
  fragment Fragment4685 on Member204 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_204
    memberCount_204
    memberMetric_204
  }
`);

type FragmentResult4685 = ResultOf<typeof FRAGMENT_4685>;
type FragmentSelf4685 = NonNullable<FragmentResult4685>;

export type FragmentToken4685 =
  | FragmentSelf4685["__typename"]
  | FragmentSelf4685["typenameHint"] | FragmentToken4683 | FragmentToken4684;
