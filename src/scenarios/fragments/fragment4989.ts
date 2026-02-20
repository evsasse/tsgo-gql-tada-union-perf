import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4987 } from "./fragment4987";
import type { FragmentToken4988 } from "./fragment4988";

export const FRAGMENT_4989 = gql(`
  fragment Fragment4989 on Member228 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_228
    memberCount_228
    memberMetric_228
  }
`);

type FragmentResult4989 = ResultOf<typeof FRAGMENT_4989>;
type FragmentSelf4989 = NonNullable<FragmentResult4989>;

export type FragmentToken4989 =
  | FragmentSelf4989["__typename"]
  | FragmentSelf4989["typenameHint"] | FragmentToken4987 | FragmentToken4988;
