import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken354 } from "./fragment354";
import type { FragmentToken355 } from "./fragment355";

export const FRAGMENT_356 = gql(`
  fragment Fragment356 on Member75 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_75
    memberCount_75
    memberMetric_75
  }
`);

type FragmentResult356 = ResultOf<typeof FRAGMENT_356>;
type FragmentSelf356 = NonNullable<FragmentResult356>;

export type FragmentToken356 =
  | FragmentSelf356["__typename"]
  | FragmentSelf356["typenameHint"] | FragmentToken354 | FragmentToken355;
