import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3697 } from "./fragment3697";
import type { FragmentToken3698 } from "./fragment3698";

export const FRAGMENT_3699 = gql(`
  fragment Fragment3699 on Member58 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_58
    memberCount_58
    memberMetric_58
  }
`);

type FragmentResult3699 = ResultOf<typeof FRAGMENT_3699>;
type FragmentSelf3699 = NonNullable<FragmentResult3699>;

export type FragmentToken3699 =
  | FragmentSelf3699["__typename"]
  | FragmentSelf3699["typenameHint"] | FragmentToken3697 | FragmentToken3698;
