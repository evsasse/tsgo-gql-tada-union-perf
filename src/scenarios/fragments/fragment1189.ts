import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1187 } from "./fragment1187";
import type { FragmentToken1188 } from "./fragment1188";

export const FRAGMENT_1189 = gql(`
  fragment Fragment1189 on Member68 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_68
    memberCount_68
    memberMetric_68
  }
`);

type FragmentResult1189 = ResultOf<typeof FRAGMENT_1189>;
type FragmentSelf1189 = NonNullable<FragmentResult1189>;

export type FragmentToken1189 =
  | FragmentSelf1189["__typename"]
  | FragmentSelf1189["typenameHint"] | FragmentToken1187 | FragmentToken1188;
