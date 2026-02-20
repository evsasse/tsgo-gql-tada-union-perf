import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken300 } from "./fragment300";
import type { FragmentToken301 } from "./fragment301";

export const FRAGMENT_302 = gql(`
  fragment Fragment302 on Member21 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_21
    memberCount_21
    memberMetric_21
  }
`);

type FragmentResult302 = ResultOf<typeof FRAGMENT_302>;
type FragmentSelf302 = NonNullable<FragmentResult302>;

export type FragmentToken302 =
  | FragmentSelf302["__typename"]
  | FragmentSelf302["typenameHint"] | FragmentToken300 | FragmentToken301;
