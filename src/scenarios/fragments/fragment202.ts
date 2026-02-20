import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken200 } from "./fragment200";
import type { FragmentToken201 } from "./fragment201";

export const FRAGMENT_202 = gql(`
  fragment Fragment202 on Member201 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_201
    memberCount_201
    memberMetric_201
  }
`);

type FragmentResult202 = ResultOf<typeof FRAGMENT_202>;
type FragmentSelf202 = NonNullable<FragmentResult202>;

export type FragmentToken202 =
  | FragmentSelf202["__typename"]
  | FragmentSelf202["typenameHint"] | FragmentToken200 | FragmentToken201;
