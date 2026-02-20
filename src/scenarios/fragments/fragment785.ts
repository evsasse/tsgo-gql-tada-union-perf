import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken783 } from "./fragment783";
import type { FragmentToken784 } from "./fragment784";

export const FRAGMENT_785 = gql(`
  fragment Fragment785 on Member224 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_224
    memberCount_224
    memberMetric_224
  }
`);

type FragmentResult785 = ResultOf<typeof FRAGMENT_785>;
type FragmentSelf785 = NonNullable<FragmentResult785>;

export type FragmentToken785 =
  | FragmentSelf785["__typename"]
  | FragmentSelf785["typenameHint"] | FragmentToken783 | FragmentToken784;
