import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken157 } from "./fragment157";
import type { FragmentToken158 } from "./fragment158";

export const FRAGMENT_159 = gql(`
  fragment Fragment159 on Member158 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_158
    memberCount_158
    memberMetric_158
  }
`);

type FragmentResult159 = ResultOf<typeof FRAGMENT_159>;
type FragmentSelf159 = NonNullable<FragmentResult159>;

export type FragmentToken159 =
  | FragmentSelf159["__typename"]
  | FragmentSelf159["typenameHint"] | FragmentToken157 | FragmentToken158;
