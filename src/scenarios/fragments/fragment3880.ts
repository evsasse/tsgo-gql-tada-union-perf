import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3878 } from "./fragment3878";
import type { FragmentToken3879 } from "./fragment3879";

export const FRAGMENT_3880 = gql(`
  fragment Fragment3880 on Member239 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_239
    memberCount_239
    memberMetric_239
  }
`);

type FragmentResult3880 = ResultOf<typeof FRAGMENT_3880>;
type FragmentSelf3880 = NonNullable<FragmentResult3880>;

export type FragmentToken3880 =
  | FragmentSelf3880["__typename"]
  | FragmentSelf3880["typenameHint"] | FragmentToken3878 | FragmentToken3879;
