import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4809 } from "./fragment4809";
import type { FragmentToken4810 } from "./fragment4810";

export const FRAGMENT_4811 = gql(`
  fragment Fragment4811 on Member50 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_50
    memberCount_50
    memberMetric_50
  }
`);

type FragmentResult4811 = ResultOf<typeof FRAGMENT_4811>;
type FragmentSelf4811 = NonNullable<FragmentResult4811>;

export type FragmentToken4811 =
  | FragmentSelf4811["__typename"]
  | FragmentSelf4811["typenameHint"] | FragmentToken4809 | FragmentToken4810;
