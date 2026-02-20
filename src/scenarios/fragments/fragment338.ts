import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken336 } from "./fragment336";
import type { FragmentToken337 } from "./fragment337";

export const FRAGMENT_338 = gql(`
  fragment Fragment338 on Member57 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_57
    memberCount_57
    memberMetric_57
  }
`);

type FragmentResult338 = ResultOf<typeof FRAGMENT_338>;
type FragmentSelf338 = NonNullable<FragmentResult338>;

export type FragmentToken338 =
  | FragmentSelf338["__typename"]
  | FragmentSelf338["typenameHint"] | FragmentToken336 | FragmentToken337;
