import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken983 } from "./fragment983";
import type { FragmentToken984 } from "./fragment984";

export const FRAGMENT_985 = gql(`
  fragment Fragment985 on Member144 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_144
    memberCount_144
    memberMetric_144
  }
`);

type FragmentResult985 = ResultOf<typeof FRAGMENT_985>;
type FragmentSelf985 = NonNullable<FragmentResult985>;

export type FragmentToken985 =
  | FragmentSelf985["__typename"]
  | FragmentSelf985["typenameHint"] | FragmentToken983 | FragmentToken984;
