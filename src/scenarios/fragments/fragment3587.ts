import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3585 } from "./fragment3585";
import type { FragmentToken3586 } from "./fragment3586";

export const FRAGMENT_3587 = gql(`
  fragment Fragment3587 on Member226 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_226
    memberCount_226
    memberMetric_226
  }
`);

type FragmentResult3587 = ResultOf<typeof FRAGMENT_3587>;
type FragmentSelf3587 = NonNullable<FragmentResult3587>;

export type FragmentToken3587 =
  | FragmentSelf3587["__typename"]
  | FragmentSelf3587["typenameHint"] | FragmentToken3585 | FragmentToken3586;
