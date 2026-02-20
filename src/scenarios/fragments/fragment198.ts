import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken196 } from "./fragment196";
import type { FragmentToken197 } from "./fragment197";

export const FRAGMENT_198 = gql(`
  fragment Fragment198 on Member197 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_197
    memberCount_197
    memberMetric_197
  }
`);

type FragmentResult198 = ResultOf<typeof FRAGMENT_198>;
type FragmentSelf198 = NonNullable<FragmentResult198>;

export type FragmentToken198 =
  | FragmentSelf198["__typename"]
  | FragmentSelf198["typenameHint"] | FragmentToken196 | FragmentToken197;
