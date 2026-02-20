import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken258 } from "./fragment258";
import type { FragmentToken259 } from "./fragment259";

export const FRAGMENT_260 = gql(`
  fragment Fragment260 on Member259 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_259
    memberCount_259
    memberMetric_259
  }
`);

type FragmentResult260 = ResultOf<typeof FRAGMENT_260>;
type FragmentSelf260 = NonNullable<FragmentResult260>;

export type FragmentToken260 =
  | FragmentSelf260["__typename"]
  | FragmentSelf260["typenameHint"] | FragmentToken258 | FragmentToken259;
