import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken954 } from "./fragment954";
import type { FragmentToken955 } from "./fragment955";

export const FRAGMENT_956 = gql(`
  fragment Fragment956 on Member115 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_115
    memberCount_115
    memberMetric_115
  }
`);

type FragmentResult956 = ResultOf<typeof FRAGMENT_956>;
type FragmentSelf956 = NonNullable<FragmentResult956>;

export type FragmentToken956 =
  | FragmentSelf956["__typename"]
  | FragmentSelf956["typenameHint"] | FragmentToken954 | FragmentToken955;
