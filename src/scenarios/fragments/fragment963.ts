import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken961 } from "./fragment961";
import type { FragmentToken962 } from "./fragment962";

export const FRAGMENT_963 = gql(`
  fragment Fragment963 on Member122 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_122
    memberCount_122
    memberMetric_122
  }
`);

type FragmentResult963 = ResultOf<typeof FRAGMENT_963>;
type FragmentSelf963 = NonNullable<FragmentResult963>;

export type FragmentToken963 =
  | FragmentSelf963["__typename"]
  | FragmentSelf963["typenameHint"] | FragmentToken961 | FragmentToken962;
