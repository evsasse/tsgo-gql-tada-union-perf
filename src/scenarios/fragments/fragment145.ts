import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken143 } from "./fragment143";
import type { FragmentToken144 } from "./fragment144";

export const FRAGMENT_145 = gql(`
  fragment Fragment145 on Member144 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_144
    memberCount_144
    memberMetric_144
  }
`);

type FragmentResult145 = ResultOf<typeof FRAGMENT_145>;
type FragmentSelf145 = NonNullable<FragmentResult145>;

export type FragmentToken145 =
  | FragmentSelf145["__typename"]
  | FragmentSelf145["typenameHint"] | FragmentToken143 | FragmentToken144;
