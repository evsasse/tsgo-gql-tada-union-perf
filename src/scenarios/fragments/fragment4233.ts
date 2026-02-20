import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4231 } from "./fragment4231";
import type { FragmentToken4232 } from "./fragment4232";

export const FRAGMENT_4233 = gql(`
  fragment Fragment4233 on Member32 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_32
    memberCount_32
    memberMetric_32
  }
`);

type FragmentResult4233 = ResultOf<typeof FRAGMENT_4233>;
type FragmentSelf4233 = NonNullable<FragmentResult4233>;

export type FragmentToken4233 =
  | FragmentSelf4233["__typename"]
  | FragmentSelf4233["typenameHint"] | FragmentToken4231 | FragmentToken4232;
