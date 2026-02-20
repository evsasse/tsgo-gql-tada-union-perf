import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken895 } from "./fragment895";
import type { FragmentToken896 } from "./fragment896";

export const FRAGMENT_897 = gql(`
  fragment Fragment897 on Member56 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_56
    memberCount_56
    memberMetric_56
  }
`);

type FragmentResult897 = ResultOf<typeof FRAGMENT_897>;
type FragmentSelf897 = NonNullable<FragmentResult897>;

export type FragmentToken897 =
  | FragmentSelf897["__typename"]
  | FragmentSelf897["typenameHint"] | FragmentToken895 | FragmentToken896;
