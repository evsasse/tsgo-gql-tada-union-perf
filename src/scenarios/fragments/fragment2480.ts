import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2478 } from "./fragment2478";
import type { FragmentToken2479 } from "./fragment2479";

export const FRAGMENT_2480 = gql(`
  fragment Fragment2480 on Member239 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_239
    memberCount_239
    memberMetric_239
  }
`);

type FragmentResult2480 = ResultOf<typeof FRAGMENT_2480>;
type FragmentSelf2480 = NonNullable<FragmentResult2480>;

export type FragmentToken2480 =
  | FragmentSelf2480["__typename"]
  | FragmentSelf2480["typenameHint"] | FragmentToken2478 | FragmentToken2479;
