import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4985 } from "./fragment4985";
import type { FragmentToken4986 } from "./fragment4986";

export const FRAGMENT_4987 = gql(`
  fragment Fragment4987 on Member226 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_226
    memberCount_226
    memberMetric_226
  }
`);

type FragmentResult4987 = ResultOf<typeof FRAGMENT_4987>;
type FragmentSelf4987 = NonNullable<FragmentResult4987>;

export type FragmentToken4987 =
  | FragmentSelf4987["__typename"]
  | FragmentSelf4987["typenameHint"] | FragmentToken4985 | FragmentToken4986;
