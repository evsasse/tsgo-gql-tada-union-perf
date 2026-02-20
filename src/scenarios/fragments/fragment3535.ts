import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3533 } from "./fragment3533";
import type { FragmentToken3534 } from "./fragment3534";

export const FRAGMENT_3535 = gql(`
  fragment Fragment3535 on Member174 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_174
    memberCount_174
    memberMetric_174
  }
`);

type FragmentResult3535 = ResultOf<typeof FRAGMENT_3535>;
type FragmentSelf3535 = NonNullable<FragmentResult3535>;

export type FragmentToken3535 =
  | FragmentSelf3535["__typename"]
  | FragmentSelf3535["typenameHint"] | FragmentToken3533 | FragmentToken3534;
