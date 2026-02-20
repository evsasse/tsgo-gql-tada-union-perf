import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3500 } from "./fragment3500";
import type { FragmentToken3501 } from "./fragment3501";

export const FRAGMENT_3502 = gql(`
  fragment Fragment3502 on Member141 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_141
    memberCount_141
    memberMetric_141
  }
`);

type FragmentResult3502 = ResultOf<typeof FRAGMENT_3502>;
type FragmentSelf3502 = NonNullable<FragmentResult3502>;

export type FragmentToken3502 =
  | FragmentSelf3502["__typename"]
  | FragmentSelf3502["typenameHint"] | FragmentToken3500 | FragmentToken3501;
