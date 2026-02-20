import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3506 } from "./fragment3506";
import type { FragmentToken3507 } from "./fragment3507";

export const FRAGMENT_3508 = gql(`
  fragment Fragment3508 on Member147 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_147
    memberCount_147
    memberMetric_147
  }
`);

type FragmentResult3508 = ResultOf<typeof FRAGMENT_3508>;
type FragmentSelf3508 = NonNullable<FragmentResult3508>;

export type FragmentToken3508 =
  | FragmentSelf3508["__typename"]
  | FragmentSelf3508["typenameHint"] | FragmentToken3506 | FragmentToken3507;
