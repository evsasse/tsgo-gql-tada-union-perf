import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken563 } from "./fragment563";
import type { FragmentToken564 } from "./fragment564";

export const FRAGMENT_565 = gql(`
  fragment Fragment565 on Member04 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_04
    memberCount_04
    memberMetric_04
  }
`);

type FragmentResult565 = ResultOf<typeof FRAGMENT_565>;
type FragmentSelf565 = NonNullable<FragmentResult565>;

export type FragmentToken565 =
  | FragmentSelf565["__typename"]
  | FragmentSelf565["typenameHint"] | FragmentToken563 | FragmentToken564;
