import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4781 } from "./fragment4781";
import type { FragmentToken4782 } from "./fragment4782";

export const FRAGMENT_4783 = gql(`
  fragment Fragment4783 on Member22 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_22
    memberCount_22
    memberMetric_22
  }
`);

type FragmentResult4783 = ResultOf<typeof FRAGMENT_4783>;
type FragmentSelf4783 = NonNullable<FragmentResult4783>;

export type FragmentToken4783 =
  | FragmentSelf4783["__typename"]
  | FragmentSelf4783["typenameHint"] | FragmentToken4781 | FragmentToken4782;
