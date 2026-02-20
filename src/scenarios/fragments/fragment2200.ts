import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2198 } from "./fragment2198";
import type { FragmentToken2199 } from "./fragment2199";

export const FRAGMENT_2200 = gql(`
  fragment Fragment2200 on Member239 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_239
    memberCount_239
    memberMetric_239
  }
`);

type FragmentResult2200 = ResultOf<typeof FRAGMENT_2200>;
type FragmentSelf2200 = NonNullable<FragmentResult2200>;

export type FragmentToken2200 =
  | FragmentSelf2200["__typename"]
  | FragmentSelf2200["typenameHint"] | FragmentToken2198 | FragmentToken2199;
