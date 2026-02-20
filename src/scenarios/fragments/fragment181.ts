import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken179 } from "./fragment179";
import type { FragmentToken180 } from "./fragment180";

export const FRAGMENT_181 = gql(`
  fragment Fragment181 on Member180 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_180
    memberCount_180
    memberMetric_180
  }
`);

type FragmentResult181 = ResultOf<typeof FRAGMENT_181>;
type FragmentSelf181 = NonNullable<FragmentResult181>;

export type FragmentToken181 =
  | FragmentSelf181["__typename"]
  | FragmentSelf181["typenameHint"] | FragmentToken179 | FragmentToken180;
