import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4343 } from "./fragment4343";
import type { FragmentToken4344 } from "./fragment4344";

export const FRAGMENT_4345 = gql(`
  fragment Fragment4345 on Member144 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_144
    memberCount_144
    memberMetric_144
  }
`);

type FragmentResult4345 = ResultOf<typeof FRAGMENT_4345>;
type FragmentSelf4345 = NonNullable<FragmentResult4345>;

export type FragmentToken4345 =
  | FragmentSelf4345["__typename"]
  | FragmentSelf4345["typenameHint"] | FragmentToken4343 | FragmentToken4344;
