import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3865 } from "./fragment3865";
import type { FragmentToken3866 } from "./fragment3866";

export const FRAGMENT_3867 = gql(`
  fragment Fragment3867 on Member226 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_226
    memberCount_226
    memberMetric_226
  }
`);

type FragmentResult3867 = ResultOf<typeof FRAGMENT_3867>;
type FragmentSelf3867 = NonNullable<FragmentResult3867>;

export type FragmentToken3867 =
  | FragmentSelf3867["__typename"]
  | FragmentSelf3867["typenameHint"] | FragmentToken3865 | FragmentToken3866;
