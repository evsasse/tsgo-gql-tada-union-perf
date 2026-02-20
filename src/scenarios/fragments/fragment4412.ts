import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4410 } from "./fragment4410";
import type { FragmentToken4411 } from "./fragment4411";

export const FRAGMENT_4412 = gql(`
  fragment Fragment4412 on Member211 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_211
    memberCount_211
    memberMetric_211
  }
`);

type FragmentResult4412 = ResultOf<typeof FRAGMENT_4412>;
type FragmentSelf4412 = NonNullable<FragmentResult4412>;

export type FragmentToken4412 =
  | FragmentSelf4412["__typename"]
  | FragmentSelf4412["typenameHint"] | FragmentToken4410 | FragmentToken4411;
