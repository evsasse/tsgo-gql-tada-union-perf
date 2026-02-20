import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4638 } from "./fragment4638";
import type { FragmentToken4639 } from "./fragment4639";

export const FRAGMENT_4640 = gql(`
  fragment Fragment4640 on Member159 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_159
    memberCount_159
    memberMetric_159
  }
`);

type FragmentResult4640 = ResultOf<typeof FRAGMENT_4640>;
type FragmentSelf4640 = NonNullable<FragmentResult4640>;

export type FragmentToken4640 =
  | FragmentSelf4640["__typename"]
  | FragmentSelf4640["typenameHint"] | FragmentToken4638 | FragmentToken4639;
