import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken199 } from "./fragment199";
import type { FragmentToken200 } from "./fragment200";

export const FRAGMENT_201 = gql(`
  fragment Fragment201 on Member200 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_200
    memberCount_200
    memberMetric_200
  }
`);

type FragmentResult201 = ResultOf<typeof FRAGMENT_201>;
type FragmentSelf201 = NonNullable<FragmentResult201>;

export type FragmentToken201 =
  | FragmentSelf201["__typename"]
  | FragmentSelf201["typenameHint"] | FragmentToken199 | FragmentToken200;
