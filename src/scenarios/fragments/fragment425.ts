import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken423 } from "./fragment423";
import type { FragmentToken424 } from "./fragment424";

export const FRAGMENT_425 = gql(`
  fragment Fragment425 on Member144 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_144
    memberCount_144
    memberMetric_144
  }
`);

type FragmentResult425 = ResultOf<typeof FRAGMENT_425>;
type FragmentSelf425 = NonNullable<FragmentResult425>;

export type FragmentToken425 =
  | FragmentSelf425["__typename"]
  | FragmentSelf425["typenameHint"] | FragmentToken423 | FragmentToken424;
