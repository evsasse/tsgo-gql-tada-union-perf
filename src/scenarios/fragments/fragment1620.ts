import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1618 } from "./fragment1618";
import type { FragmentToken1619 } from "./fragment1619";

export const FRAGMENT_1620 = gql(`
  fragment Fragment1620 on Member219 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_219
    memberCount_219
    memberMetric_219
  }
`);

type FragmentResult1620 = ResultOf<typeof FRAGMENT_1620>;
type FragmentSelf1620 = NonNullable<FragmentResult1620>;

export type FragmentToken1620 =
  | FragmentSelf1620["__typename"]
  | FragmentSelf1620["typenameHint"] | FragmentToken1618 | FragmentToken1619;
