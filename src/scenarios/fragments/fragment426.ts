import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken424 } from "./fragment424";
import type { FragmentToken425 } from "./fragment425";

export const FRAGMENT_426 = gql(`
  fragment Fragment426 on Member145 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_145
    memberCount_145
    memberMetric_145
  }
`);

type FragmentResult426 = ResultOf<typeof FRAGMENT_426>;
type FragmentSelf426 = NonNullable<FragmentResult426>;

export type FragmentToken426 =
  | FragmentSelf426["__typename"]
  | FragmentSelf426["typenameHint"] | FragmentToken424 | FragmentToken425;
