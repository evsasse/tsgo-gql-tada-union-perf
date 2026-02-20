import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1616 } from "./fragment1616";
import type { FragmentToken1617 } from "./fragment1617";

export const FRAGMENT_1618 = gql(`
  fragment Fragment1618 on Member217 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_217
    memberCount_217
    memberMetric_217
  }
`);

type FragmentResult1618 = ResultOf<typeof FRAGMENT_1618>;
type FragmentSelf1618 = NonNullable<FragmentResult1618>;

export type FragmentToken1618 =
  | FragmentSelf1618["__typename"]
  | FragmentSelf1618["typenameHint"] | FragmentToken1616 | FragmentToken1617;
