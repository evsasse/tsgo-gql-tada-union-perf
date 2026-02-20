import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken657 } from "./fragment657";
import type { FragmentToken658 } from "./fragment658";

export const FRAGMENT_659 = gql(`
  fragment Fragment659 on Member98 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_98
    memberCount_98
    memberMetric_98
  }
`);

type FragmentResult659 = ResultOf<typeof FRAGMENT_659>;
type FragmentSelf659 = NonNullable<FragmentResult659>;

export type FragmentToken659 =
  | FragmentSelf659["__typename"]
  | FragmentSelf659["typenameHint"] | FragmentToken657 | FragmentToken658;
