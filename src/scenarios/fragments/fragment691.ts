import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken689 } from "./fragment689";
import type { FragmentToken690 } from "./fragment690";

export const FRAGMENT_691 = gql(`
  fragment Fragment691 on Member130 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_130
    memberCount_130
    memberMetric_130
  }
`);

type FragmentResult691 = ResultOf<typeof FRAGMENT_691>;
type FragmentSelf691 = NonNullable<FragmentResult691>;

export type FragmentToken691 =
  | FragmentSelf691["__typename"]
  | FragmentSelf691["typenameHint"] | FragmentToken689 | FragmentToken690;
