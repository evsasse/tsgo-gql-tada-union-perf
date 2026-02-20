import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3879 } from "./fragment3879";
import type { FragmentToken3880 } from "./fragment3880";

export const FRAGMENT_3881 = gql(`
  fragment Fragment3881 on Member240 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_240
    memberCount_240
    memberMetric_240
  }
`);

type FragmentResult3881 = ResultOf<typeof FRAGMENT_3881>;
type FragmentSelf3881 = NonNullable<FragmentResult3881>;

export type FragmentToken3881 =
  | FragmentSelf3881["__typename"]
  | FragmentSelf3881["typenameHint"] | FragmentToken3879 | FragmentToken3880;
