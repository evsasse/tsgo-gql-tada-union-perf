import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4376 } from "./fragment4376";
import type { FragmentToken4377 } from "./fragment4377";

export const FRAGMENT_4378 = gql(`
  fragment Fragment4378 on Member177 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_177
    memberCount_177
    memberMetric_177
  }
`);

type FragmentResult4378 = ResultOf<typeof FRAGMENT_4378>;
type FragmentSelf4378 = NonNullable<FragmentResult4378>;

export type FragmentToken4378 =
  | FragmentSelf4378["__typename"]
  | FragmentSelf4378["typenameHint"] | FragmentToken4376 | FragmentToken4377;
