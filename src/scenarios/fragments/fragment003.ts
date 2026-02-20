import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken001 } from "./fragment001";
import type { FragmentToken002 } from "./fragment002";

export const FRAGMENT_003 = gql(`
  fragment Fragment003 on Member02 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_02
    memberCount_02
    memberMetric_02
  }
`);

type FragmentResult003 = ResultOf<typeof FRAGMENT_003>;
type FragmentSelf003 = NonNullable<FragmentResult003>;

export type FragmentToken003 =
  | FragmentSelf003["__typename"]
  | FragmentSelf003["typenameHint"] | FragmentToken001 | FragmentToken002;
