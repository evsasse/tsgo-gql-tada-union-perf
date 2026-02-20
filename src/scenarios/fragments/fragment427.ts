import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken425 } from "./fragment425";
import type { FragmentToken426 } from "./fragment426";

export const FRAGMENT_427 = gql(`
  fragment Fragment427 on Member146 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_146
    memberCount_146
    memberMetric_146
  }
`);

type FragmentResult427 = ResultOf<typeof FRAGMENT_427>;
type FragmentSelf427 = NonNullable<FragmentResult427>;

export type FragmentToken427 =
  | FragmentSelf427["__typename"]
  | FragmentSelf427["typenameHint"] | FragmentToken425 | FragmentToken426;
