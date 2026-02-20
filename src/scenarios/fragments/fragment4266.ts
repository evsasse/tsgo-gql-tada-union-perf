import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4264 } from "./fragment4264";
import type { FragmentToken4265 } from "./fragment4265";

export const FRAGMENT_4266 = gql(`
  fragment Fragment4266 on Member65 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_65
    memberCount_65
    memberMetric_65
  }
`);

type FragmentResult4266 = ResultOf<typeof FRAGMENT_4266>;
type FragmentSelf4266 = NonNullable<FragmentResult4266>;

export type FragmentToken4266 =
  | FragmentSelf4266["__typename"]
  | FragmentSelf4266["typenameHint"] | FragmentToken4264 | FragmentToken4265;
